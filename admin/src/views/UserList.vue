<template>
  <div class="about">
    <h1>分类列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"> </el-table-column>
      <el-table-column prop="avatar" label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" style="height: 4em;" />
        </template>
      </el-table-column>
      <el-table-column prop="username" label="用户名"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/admin_users/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="pager" :hide-on-single-page="true" :total="totalCount" :page-size="size" @current-change="handleCurrentChange" :current-page.sync="currentPage"> </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      totalCount: 0,
      size: 10,
      currentPage: 1
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
      this.fetch()
    },
    async fetch() {
      const res = await this.$http.get('rest/admin_users', {
        params: {
          pageSize: this.size,
          currentPage: this.currentPage
        }
      })
      this.items = res.data.list
      this.totalCount = res.data.totalCount
    },
    remove(row) {
      this.$confirm(`是否确定要删除 "${row.username}"`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await this.$http.delete(`rest/admin_users/${row._id}`)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.fetch()
      })
    }
  }
}
</script>

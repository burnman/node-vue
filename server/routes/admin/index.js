module.exports = app => {
  const express = require('express')
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')

  const router = express.Router({
    mergeParams: true
  })

  // 新增分类
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  // 获取分类列表
  router.get('/', (req, res) => {
    let limit = req.query.pageSize || 10 //分页参数
    let currentPage = req.query.currentPage || 1 //当前页码
    if (currentPage < 1) {
      currentPage = 1
    }

    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }

    req.Model.find({}, (err, ress) => {
      let count = ress.length
      req.Model.find()
        .setOptions(queryOptions)
        .skip((parseInt(currentPage) - 1) * parseInt(limit))
        .limit(parseInt(limit))
        .exec((err, list) => {
          return res.json({
            page: currentPage,
            size: limit,
            totalCount: count,
            list: list
          })
        })
    })

    // const items = await req.Model.find()
    //   .setOptions(queryOptions)
    //   .limit(10)
    // res.send(items)
  })

  // 获取分类信息
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  // 修改分类信息
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 删除分类
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndRemove(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  // 登录校验中间件
  const authMiddleware = require('../../middleware/auth')
  const resourceMiddleware = require('../../middleware/resource')

  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

  // 图片上传接口
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' })
  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://test.mattchen.site/uploads/${file.filename}`
    res.send(file)
  })

  // 登录接口
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body

    // 1.根据用户名找用户
    const user = await AdminUser.findOne({ username }).select('+password')
    assert(user, 422, '用户不存在')

    // 2.校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')

    // 3.返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}

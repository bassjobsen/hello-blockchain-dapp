app.route.get('/messages/requests/:address',  async function (req) {
    return await app.model.Message.findAll({requestor: req.params.address})
})
app.route.get('/messages/responses/:address',  async function (req) {
    return await app.model.Message.findAll({responder: req.params.address})
})
app.route.get('/messages/openrequests/',  async function (req) {
    let options = {
        condition: {
            response: {
            $is: null
          }
        }
      }
    return await app.model.Message.findAll(options)
})
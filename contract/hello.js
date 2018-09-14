module.exports = {
  request: async function(message) {
    app.sdb.lock('hello.request@' + this.trs.senderId )
    app.sdb.create('Message', {
      messageId: app.autoID.increment('messageId_max_id'),
      requestor: this.trs.senderId,
      message: message,
      requestTime: this.trs.timestamp
    })
  },
  respond: async function(response, messageId) {
    app.sdb.lock('hello.response@' + this.trs.senderId)
    app.sdb.update('Message', { 
      response: response
    }, { messageId: messageId })
    app.sdb.update('Message', { 
      responder: this.trs.senderId
    }, { messageId: messageId })
    app.sdb.update('Message', { 
      responseTime: this.trs.timestamp
    }, { messageId: messageId })
    
    /*app.sdb.replace('Message', {
      messageId: messageId,
      response: response, 
      responder: this.trs.senderId,
      responseTime: this.trs.timestamp
    })*/
    /*app.sdb.update('Message', { 
      response: response, 
      responder: this.trs.senderId,
      responseTime: this.trs.timestamp
    }, { messageId: messageId })*/
  }
}
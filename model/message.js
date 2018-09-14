module.exports = {
  name: 'messages',
  fields: [
    {
      name: 'messageId',
      type: 'BigInt',
      not_null: true,
      unique: true,
      primary_key: true
    }, 
    {
      name: 'message',
      type: 'Text'
    },
    {
      name: 'response',
      type: 'Text'
    },
    {
      name: 'requestor',
      type: 'String',
      length: 50,
      not_null: true,
    },
    {
      name: 'responder',
      type: 'String',
      length: 50
    },
    {
      name: 'requestTime',
      type: 'Number',
      not_null: true
    },
    {
      name: 'responseTime',
      type: 'Number'
    }
  ]
}
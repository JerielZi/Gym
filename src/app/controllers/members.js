const { age, date } = require('../../lib/utils')

module.exports = {
  index(req, res){
    return res.render("members/index")
  },
  create(req, res){
    return res.render("members/create")
  },
  post(req, res){
    //Estrutura de validação dos dados antes de enviar os dados para a BD
    const keys = Object.keys(req.body)

    for(key of keys) {
      //req.body.key == ""
      if (req.body[key] == "") {
        return res.send('Please, fill all the fields!')
      }
    }
    
    return

  },
  show(req, res){
    return
  },
  edit(req, res){
    return
  },
  put(req, res){
    //Estrutura de validação dos dados antes de enviar os dados para a BD
    const keys = Object.keys(req.body)

    for(key of keys) {
      //req.body.key == ""
      if (req.body[key] == "") {
        return res.send('Please, fill all the fields!')
      }
    }

    return
  },
  delete(req, res){
    return
  },
}
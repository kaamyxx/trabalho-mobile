const express = require('express');
const router = express.Router();

router.get('/', (req,res)=> {

    res.json({mensagem:'rota funcionando'});

});

router.get('/:id', (req,res)=> {
    const id = req.params.id;
    res.json({mensagem:'pegar somente com o id: ${id}'});

});

router.post ('/',(req, res)=>{

    const body = req.body;

    res.json(body); 
})

router.put('/:id',(req,res)=>{
    res.json({mensagem:'atualizar somente com o id: ${id}'});

})

router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    res.json({mensagem:'deletar somente com o id: ${id}'});
})

module.exports = router;
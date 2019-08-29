const express = require('express');
const Construccion = require('../models/construccion');
const app = express();

app.get('/construccion', function(req,res){    
    Construccion.find()
    .exec((err,construccionDB)=>{
        if (err) {
            return res.status(400).json({ ok: false, err });
        }
        res.json({ ok: true, construccionDB });
    });
});

app.post('/construccion', function(req, res) {

    //captura el cuerpo del request para realizar la insercion
    let body = req.body;
    let construccion = new Construccion({
        Type_apartment: body.tipo,
        apartment_number: body.referencia,
        area_mt: body.area,
        price_mt: body.precio,
        pricetotal_mt: body.area *  body.precio
    });

    construccion.save((err, construccionDB) => {
        if (err) {return res.status(500).json({ok: false, err});}

        res.json({ ok: true, construccion: construccionDB});
    });

});

app.put('/construccion/:id', function(req,res){
    
    let id = req.params.id;
    //captura el cuerpo del request para realizar la actualizacion
    let body = req.body;

    Construccion.findById(id, (err, construccionDB) => {

        if (err) { return escape.status(500).json({ ok: false, err }); }
        if (!construccionDB) { return res.status(400).json({ ok: false, err: { message: 'Este ID no es valido' } }); }

        construccionDB.Type_apartment = body.tipo;
        construccionDB.apartment_number = body.referencia;
        construccionDB.area_mt = body.area;
        construccionDB.price_mt = body.precio;
        construccionDB.pricetotal_mt = body.area * body.precio;

        construccionDB.save((err,construccionActualizar)=>{
            if (err) { return res.status(400).json({ ok: false, err }); };

            res.json({ ok: true, construccion: construccionActualizar });
        })

    })
});

module.exports = app;
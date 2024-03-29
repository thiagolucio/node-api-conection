const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

// GET ROTA USUARIO
router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Sucesso usando rota GET usuários'
    })
});

// GET ID - USER
router.get('/:id_user', (req, res, next) => {
    const id = req.params.id_user
    if (id === '10') {
        res.status(200).send({
            message: `Este ID está dentro de uma regra especifica == ${id}`,
        });
    } else {
        res.status(200).send({
            message: `Sucesso no GET do usuário por id == ${id}`,
        });
    }
});

// POST ID - INSERE USER
// router.post('/:id_user', (req, res, next) => {
//     const id = req.params.id_user
//     res.status(200).send({
//         message: 'Usuário Alterado com sucesso!',
            
//     })
// });

// DELETANDO USUARIOS
router.delete('/', (req, res, next) => {    
    res.status(200).send({
        message: 'Deletando usuarios'
    })
});

// PATCH ou LISTAGEM USERS
// router.patch('/', (req, res, next) => {    
//     res.status(200).send({
//         message: 'Listando todos os usuários ${}'
//     })
// });

router.patch('/', (req, res, next) => {        
    mysql.getConnection((error, conn) => {
        conn.query(
            'select * from users',
            [req.body],
            (error, resultado) => {
                console.log(error, resultado);
            }
        )
    })
});

// INSERINDO USUARIO
router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO users (name_user, password, email) VALUES (?,?,?)',
            [
                req.body.name_user, 
                req.body.password, 
                req.body.email
            ],
            (error, resultado, field) => {
                conn.release();
                if (error) {
                    console.log("Uh-oh, ScrapeNexts Error!: " + err + " using " + url);
                    errors.nexts.push(url);
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
                res.status(201).send({
                    message: 'Usuário Adicionado com Sucesso!',
                    id_user:  resultado.insertId,
                    name_user:  resultado.insertNameUser,
                    password:  resultado.insertPasswordUser,
                    email:  resultado.insertEmailUser,
                });
            }
        )
    });
});

module.exports = router;
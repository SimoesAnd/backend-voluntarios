const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let voluntarios = [];

app.get('/voluntarios', (req, res) => res.json(voluntarios));

app.post('/voluntarios', (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;
    
    if (!nome || nome.length < 3) return res.status(400).json({ erro: "Nome muito curto." });
    if (!email || !email.includes('@')) return res.status(400).json({ erro: "Email inválido." });
    const telLimpo = telefone.replace(/\D/g, '');
    if (telLimpo.length < 10 || telLimpo.length > 11) return res.status(400).json({ erro: "Telefone inválido." });
    if (mensagem && mensagem.length > 500) return res.status(400).json({ erro: "Mensagem muito longa." });

    const novo = { id: Date.now(), nome, email, telefone: telLimpo, mensagem };
    voluntarios.push(novo);
    res.status(201).json(novo);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`-----------------------------------------`);
    console.log(`Servidor ligado e operando em pleno funcionamento!`);
    console.log(`Rota: http://localhost:${PORT}/voluntarios`);
    console.log(`Aguardando requisições no Postman...`);
    console.log(`-----------------------------------------`);
});
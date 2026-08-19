const chowchow = [
    "Castrado",
    "Apto para departamento",
    "Se lleva bien con chicos",
    "Necesita patio"
];
app.get('/api/chowchow', (req, res) => {
    res.json(chowchow);
});
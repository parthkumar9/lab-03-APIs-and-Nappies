exports.index = (req, res) => {
res.status(200).json([
    {
        path: '/people/:id',
        description: 'returns a person with the passed ID'
    },

    {
        path: '/people',
        description: 'returns an array of 4 people objects. Each object has a unique ID, their name, age, and height'
    }
    
]);
};
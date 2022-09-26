import express from 'express';

const app = express();

import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);

app.listen(8000, () => console.log('Server is running on port 8000'));

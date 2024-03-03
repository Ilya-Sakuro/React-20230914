import { MainPage } from './pages/Main/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Result } from 'antd';
import { Restaurant } from './components/Restaurant/Restaurant';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Layout } from './components/Layout/component';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path='restaurants/:resId' element={<Restaurant />} />
                    <Route
                        path='*'
                        element={
                            <Result
                                status='404'
                                title='404'
                                subTitle='Sorry, the page you visited does not exist.'
                                extra={
                                    <Link to={'/'}>
                                        <Button type='primary'>Back Home</Button>
                                    </Link>
                                }
                            />
                        }
                    />
                </Route>
                <Route
                    path='restaurants/successfully'
                    element={
                        <Result
                            status='success'
                            title='Successfully purchased some goodies. Bon appetit!'
                            subTitle='Order number: 2017182818828182881 Your order will arrive within an hour.'
                            extra={
                                <Link to={'/'}>
                                    <Button className='bg-blue-500 text-white' type='primary'>
                                        Buy Again
                                    </Button>
                                </Link>
                            }
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );

    // <MainPage />
};

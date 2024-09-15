import React from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ManagerLayout from '../layout/ManageLayout';
import QuestionLayout from '../layout/QuestionLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import List from '../pages/Manage/List';
import Recycle from '../pages/Manage/Recycle';
import Star from '../pages/Manage/Star';
import Edit from '../pages/Question/Edit';
import Stat from '../pages/Question/Stat';
import NotFound from '../pages/404';

// 定义路由
const routes = [
    {
        path: '/',
        // element: <MainLayout />,
        children: [
            {
                path: '',
                // element: <Home />
            },
            {
                path: 'login',
                // element: <Login />
            },
            {
                path: 'register',
                // element: <Register />
            },
            {
                path: 'question',
                // element: <QuestionLayout />,
                children: [
                    {
                        path: 'edit/:id',
                        // element: <Edit />
                    },
                    {
                        path: 'stat/:id',
                        // element: <Stat />
                    },
                ]
            },
        ],
    },
    {
        path: 'manage',
        // element: <ManagerLayout />,
        children: [
            {
                path: 'list',
                // element: <List />
            },
            {
                path: 'recycle',
                // element: <Recycle />
            },
            {
                path: 'star',
                // element: <Star />
            },
        ]
    },
    /* 404 页面 兜底 */
    {
        path: '*',
        // element: <NotFound />,
    }
];

const router = createBrowserRouter(routes);

/* 到处路由配置供外界调用 */
export default router;
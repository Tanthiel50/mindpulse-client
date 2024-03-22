import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/admin/Dashboard";
import CategoryPage from "./pages/admin/categories/CategoryPage";
import CreateCategorie from "./pages/admin/categories/CreateCategorie";
import EditCategorie from "./pages/admin/categories/EditCategorie";
import UserPage from "./pages/admin/users/UserPage";
import CreateUser from "./pages/admin/users/CreateUser";
import EditUser from "./pages/admin/users/EditUser";
import Accompagnement from "./pages/Accompagnement";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import PostPage from "./pages/admin/posts/PostPage";
import CreatePost from "./pages/admin/posts/CreatePost";
import EditPost from "./pages/admin/posts/EditPost";
import ImagePage from "./pages/admin/images/ImagePage";
import CreateImage from "./pages/admin/images/CreateImage";
import EditImage from "./pages/admin/images/EditImage";
import MessagePage from "./pages/admin/messages/MessagePage";
import ViewMessage from "./pages/admin/messages/ViewMessage";
import PrivateRoute from "./PrivateRoute";


const RouterOutlet = () => {
  return (
    <Routes>
        {/* USER NAVIGATION */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/accompagnement" element={<Accompagnement/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/blog/:slug" element={<SingleBlog/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/team" element={<Team/>} />
      {/* <Route path="/register" element={<RegisterForm />} /> */}

      {/* ADMIN NAVIGATION */}
      <Route
        path="/admin"
        element={
          <PrivateRoute roles={['admin']}>
            <Dashboard />
          </PrivateRoute>
        }
      />
      {/* POST */}
      <Route
        path="/admin/posts"
        element={
          <PrivateRoute roles={['admin']}>
            <PostPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/create-post"
        element={
          <PrivateRoute roles={['admin']}>
            <CreatePost />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/edit-posts/:slug"
        element={
          <PrivateRoute roles={['admin']}>
            <EditPost />
          </PrivateRoute>
        }
      />
      {/* CATEGORIES */}
      <Route
        path="/admin/categories"
        element={
          <PrivateRoute roles={['admin']}>
            <CategoryPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/create-categorie"
        element={
          <PrivateRoute roles={['admin']}>
            <CreateCategorie />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/edit-categorie/:id"
        element={
          <PrivateRoute roles={['admin']}>
            <EditCategorie />
          </PrivateRoute>
        }
      />

      {/* IMAGES */}
      <Route
        path="/admin/images"
        element={
          <PrivateRoute roles={['admin']}>
            <ImagePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/create-image"
        element={
          <PrivateRoute roles={['admin']}>
            <CreateImage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/edit-image/:id"
        element={
          <PrivateRoute roles={['admin']}>
            <EditImage />
          </PrivateRoute>
        }
      />
      {/* USERS */}
      <Route
        path="/admin/users"
        element={
          <PrivateRoute roles={['admin']}>
            <UserPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/create-user"
        element={
          <PrivateRoute roles={['admin']}>
            <CreateUser />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/edit-user/:id"
        element={
          <PrivateRoute roles={['admin']}>
            <EditUser />
          </PrivateRoute>
        }
      />
      {/* MESSAGE */}
      <Route
        path="/admin/message"
        element={
          <PrivateRoute roles={['admin']}>
            <MessagePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/message/:id"
        element={
          <PrivateRoute roles={['admin']}>
            <ViewMessage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RouterOutlet;
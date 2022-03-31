import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, Community, Finance } from './../pages';

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/community" element={<Community />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="*" element={<div>Page not found</div>} />
            </Routes>
        </Router>
    )
}

export default MainRouter;
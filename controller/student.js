//get home page for student
exports.getStudent = (req, res) =>{
    res.render('PC/index', {
        pageTitle: 'PC SHOP'
    });
}

//get register page
exports.getMenu = (req, res) =>{
    res.render('PC/menu', {
        pageTitle: 'Menu'
    });
}


//get register page
exports.getNewProduct = (req, res) =>{
    res.render('PC/new', {
        pageTitle: 'Hot New'
    });
}


//get register page
exports.getContactUs = (req, res) =>{
    res.render('PC/contact', {
        pageTitle: 'Contact us'
    });
}


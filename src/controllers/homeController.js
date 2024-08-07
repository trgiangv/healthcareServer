import db from "../models/index.js";
let getHomePage = async (req,  res) => {
    try {
        let data = await db.User.findAll();
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        });
    }catch (error) {
        console.log(error);
    }
}

let getAboutPage = async (req, res) => {
    return res.render("about.ejs");
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}


import { person, navItems} from "../data/data.js";

export const home = (req, res) => {
  res.render("pages/home", {
    title: "Dinosaurs are awesome!",
    content: "Dinosaurs around the world!.",
    navItems,
  });
};

export const about = (req, res) => {
  res.render("pages/default", {
    title: "About",
    content: "This is a page about dinosaurs!",
    team: ["T-rex", "GOGO", "Gigi", "<strong>Premium</strong> Diplodocus"],
    navItems,
  });
};

export const contact = (req, res) => {
  res.render("pages/contact", {
    title: "Contact",
    content: "Contact us at 09 233 40 89",
    person,
    navItems,
  });
};

export const privacy = (req, res) => {
  res.render("pages/default", {
    title: "Privacy Policy",
    content: "Dinosaurs are protective of their privacy",
    navItems,
  });
};

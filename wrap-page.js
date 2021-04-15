const React = require('react')

const preferDefault = m => (m && m.default) || m
const Home = preferDefault(require(`./src/Viewmode/Home.js`))

module.exports = () => <Home />
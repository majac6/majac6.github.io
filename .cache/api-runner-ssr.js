var plugins = [{
      plugin: require('/Users/MAJAC/Documents/Project/majac/majac6.github.io/node_modules/gatsby-plugin-favicon/gatsby-ssr.js'),
      options: {"plugins":[],"logo":"./src/favicon.png","injectHTML":true,"icons":{"android":true,"appleIcon":true,"appleStartup":true,"coast":false,"favicons":true,"firefox":true,"twitter":false,"yandex":false,"windows":false}},
    },{
      plugin: require('/Users/MAJAC/Documents/Project/majac/majac6.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[],"trackingId":"UA-110074065-1"},
    },{
      plugin: require('/Users/MAJAC/Documents/Project/majac/majac6.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   require('/path/to/plugin1/gatsby-ssr.js'),
//   require('/path/to/plugin2/gatsby-ssr.js'),
// ]

const apis = require(`./api-ssr-docs`)

module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }
  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}

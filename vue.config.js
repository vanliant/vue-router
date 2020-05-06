module.exports = {
    assetsDir: 'site_media/lib/kanban/static',
    outputDir:'dist',
    publicPath:'/',
    
    chainWebpack: config => {
        // 修改prefetch：
        config.plugin('prefetch').tap(options => {
            options[0].fileBlacklist = options[0].fileBlacklist || []
            options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
            return options
        })
    }
}


  
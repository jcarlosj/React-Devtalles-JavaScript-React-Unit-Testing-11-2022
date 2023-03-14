module.exports = {
    // testMatch: [ '<rootDir>/tests/**/?(*.)+(spec|test).js' ]
    
    // Configuracion para admitir el uso de Fetch API no incluida en la version de Node que estemos usando en el proyecto
    setupFiles: [
        './jest.setup.js'
    ]
}
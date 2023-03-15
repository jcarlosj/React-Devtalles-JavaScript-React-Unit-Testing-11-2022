module.exports = {
    // testMatch: [ '<rootDir>/tests/**/?(*.)+(spec|test).js' ]
    // Configuracion para admitir el uso de Fetch API no incluida en la version de Node que estemos usando en el proyecto
    setupFiles: [
        './jest.setup.js'
    ],
    collectCoverage: true,                          // permite recopilar cobertura
    collectCoverageFrom: ['src/**/*.{js,jsx}'],     // especifica los archivos para recopilar cobertura de esto será de archivos archivos en todos .jsy jsxde la carpeta src
    coverageDirectory: 'coverage',                  // especifica la carpeta jest colocará los archivos de cobertura
    testEnvironment: 'jsdom',                       // El entorno de prueba que se usará para probar tenga en cuenta que lo estamos configurando jsdomy esto provendrá de @testing-library/jest-domlos jest-environment-jsdompaquetes que instalamos anteriormente.
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],// esto le dirá a jest para cada prueba que escribimos, cargará la configuración de jest.setup.js, es decir, use React testing libraly, su jest.config.js
}
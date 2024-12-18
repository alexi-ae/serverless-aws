module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.ts'], // Asegúrate de que tus pruebas estén en la carpeta test
  collectCoverage: true, // Habilitar la recolección de cobertura si es necesario
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // O la ruta a tu código fuente
  ],
  coverageDirectory: 'coverage',
};

const request = require('supertest');
const app = require('../app'); // Certifique-se de que o caminho está correto

describe('API Testing', () => {
  it('should upload a project', async () => {
    const res = await request(app).post('/upload').attach('file', 'tests/files/test.zip');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
  });

  it('should start CI/CD pipeline', async () => {
    const res = await request(app).get('/api/cicd/start/12345');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
  });

  // Encerrar o servidor após todos os testes
  afterAll(() => {
    app.close();
  });
});

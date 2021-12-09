require('dotenv').config();
const nameControllers = require('../../src/controllers/name.controller.js');
const mongoose = require('mongoose');

describe('Name controller works', () => {
  const controllers = nameControllers();
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    mongoose.connection.close();
  });

  it('save name correctly', async () => {
    const mockRes = {};
    mockRes.json = jest.fn();
    await controllers.saveName({ body: { name: 'a name' } }, mockRes);
    expect(mockRes.json).toHaveBeenCalledTimes(1);
  });

  it('save name wrong', async () => {
    const mockRes = {};
    mockRes.json = jest.fn();
    mockRes.status = jest.fn().mockReturnValue({ ...mockRes });
    await controllers.saveName({ body: { ww: 'a name' } }, mockRes);
    expect(mockRes.status).toHaveBeenCalledTimes(1);
    expect(mockRes.json).toHaveBeenCalledTimes(1);
  });
});

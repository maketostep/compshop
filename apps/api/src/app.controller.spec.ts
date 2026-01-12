import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller.js';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('healthCheck', () => {
    it('should return status ok and service api', () => {
      const result = appController.healthCheck();
      expect(result).toEqual({
        status: 'ok',
        service: 'api',
      });
    });

    it('should have status property as ok', () => {
      const result = appController.healthCheck();
      expect(result.status).toBe('ok');
    });

    it('should have service property as api', () => {
      const result = appController.healthCheck();
      expect(result.service).toBe('api');
    });

    it('should return an object', () => {
      const result = appController.healthCheck();
      expect(typeof result).toBe('object');
      expect(result).not.toBeNull();
    });
  });
});

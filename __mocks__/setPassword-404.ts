import SetNewPasswordResponse from '../src/interfaces/setNewPasswordResponse';

const setPassword404: SetNewPasswordResponse = {
  data: {
    request_time: 11,
    code: 404,
    data: {
      message: 'No query results for model [App\\Models\\UserRecoveryPasswordCodes].',
      exception: 'Symfony\\Component\\HttpKernel\\Exception\\NotFoundHttpException',
      file: '/var/www/vendor/laravel/framework/src/Illuminate/Foundation/Exceptions/Handler.php',
      line: 385,
    },
  },
  status: 404,
};

export default setPassword404;

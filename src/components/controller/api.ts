interface ApiResponse {
  status: string;
  message: string;
}

export class Api {
  constructor() {
    console.log('api');
  }

  async registerUser(data: FormData) {
    try {
      console.log('request');
      const response = await fetch('http://localhost:9090/api/registration', {
        method: 'POST',
        mode: 'cors',
        body: data,
      });

      const dataResponse: ApiResponse = await response.json();

      if (response.status === 200) {
        return {
          status: 'success',
          msg: 'Ваша заявка успешно создана',
        };
      }

      return {
        status: 'error',
        fields: {
          inputName: dataResponse.message,
        },
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

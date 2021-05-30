export const created = (message: string, payload: object) => {
  return {
    statusCode: 201,
    body: {
      message,
      payload,
      error: [],
    }
  }
}

export const serverError = (error: Error, message?: string) => {
  return {
    statusCode: 500,
    body: {
      message: message ? message : 'Ops, parece que ocorreu um erro dentro dos nossos servidores',
      payload: {},
      error: [{message: 'Ocorreu um erro em nosso servidores.'}]
    }
  }
}

export const badRequest = (error?: any) => {
  return {
    statusCode: 400,
    body: {
      message: 'Ops, ocorreram alguns erros de validações',
      payload: {},
      error,
    },
  };
};

export const notFound = (message: string, error?: any) => {
  return {
    statusCode: 404,
    body: {
      message,
      payload: {},
      error,
    },
  };
};
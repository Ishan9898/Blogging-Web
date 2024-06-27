// This are the error that you do not handle
export const catchAsyncErrors = (theFunction) => {
    return (req, res, next) => {
        // It is a kind of try catch block
      Promise.resolve(theFunction(req, res, next)).catch(next);
    };
  };
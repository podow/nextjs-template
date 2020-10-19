interface Status {
  loading: boolean;
  success: boolean;
  failed: boolean;
}

const status: Status = {
  loading: false,
  success: false,
  failed: false,
};

export default status;

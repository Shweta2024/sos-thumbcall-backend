## APIs

| Action   | Method  |  Endpoint  |
| --------   | ----------  |  ------ |
|  register Patient/Hospital  | POST  | /register  |
|  login Patient/Hospital  | POST  | /login  |
|  add settings of Patient/Hispital  |  POST | /settings  |
|  update settings of Patient/Hispital     |   PUT    |   /settings     |
|  add status     |   POST    |   /status    |
|  update status    |  PUT     |   /status     |
|  get a Patient by email    |  GET      | /patient      |
|  get a Hospital by email     |  GET     |  /hospital     |
|   home route |    GET |   /   |


## Models 

- Patient: stores patients registration data.

- Hospital: stores hospitals registration data.

- PatientSettings: stores patients address, contact details and emergency preference data.

- HospitalSettings: stores hospitals address and contact details.

- Status: stores the status of the operation.
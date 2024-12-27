const employees = [
    {
      "ID": 1,
      "firstName": "Arjun",
      "email": "employee1@example.com",
      "password": "t@123",
      "taskNumbers": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
      "tasks": [
        {
          "title": "Task 1",
          "description": "Complete the monthly report.",
          "date": "2024-12-20",
          "category": "Reports",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Attend the team meeting.",
          "date": "2024-12-15",
          "category": "Meetings",
          "active": false,
          "newTask":false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Review project milestones.",
          "date": "2024-12-18",
          "category": "Projects",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ],
      
    },
    {
      "ID": 2,
      "firstName": "Priya",
      "email": "employee2@example.com",
      "password": "t@123",
      "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 },
      "tasks": [
        {
          "title": "Task 1",
          "description": "Prepare the presentation.",
          "date": "2024-12-17",
          "category": "Presentations",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Update the project plan.",
          "date": "2024-12-16",
          "category": "Projects",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      
    },
    {
      "ID": 3,
      "firstName": "Ravi",
      "email": "employee3@example.com",
      "password": "t@123",
      "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 },
      "tasks": [
        {
          "title": "Task 1",
          "description": "Coordinate with the design team.",
          "date": "2024-12-19",
          "category": "Coordination",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Test the new software module.",
          "date": "2024-12-14",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Draft user manual updates.",
          "date": "2024-12-15",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ],
      
    },
    {
      "ID": 4,
      "firstName": "Kavya",
      "email": "employee4@example.com",
      "password": "t@123",
      "taskNumbers": { "active": 2, "newTask": 1, "completed": 0, "failed": 0 },
      "tasks": [
        {
          "title": "Task 1",
          "description": "Analyze the sales data.",
          "date": "2024-12-13",
          "category": "Analysis",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Prepare budget forecasts.",
          "date": "2024-12-18",
          "category": "Finance",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ],
      
    },
    {
      "ID": 5,
      "firstName": "Vikram",
      "email": "employee5@example.com",
      "password": "t@123",
      "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 },
      "tasks": [
        {
          "title": "Task 1",
          "description": "Schedule client follow-up calls.",
          "date": "2024-12-14",
          "category": "Client Relations",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Resolve pending tickets.",
          "date": "2024-12-12",
          "category": "Support",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      
    }
  ];
  
  
    const admin = [
    {
      "ID": 1,
      "email": "admin@example.com",
      "password": "t@123"
  }];

  export const setLocalStorage =  () => {
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
  }

  export const getLocalStorage =  () => {
    const employees=JSON.parse(localStorage.getItem("employees"))
    const admin=JSON.parse(localStorage.getItem("admin"))
    return {employees,admin}
  }
  

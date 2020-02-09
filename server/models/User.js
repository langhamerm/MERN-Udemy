const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  firstName: String,
  lastName: String,
  email: String,
  photo: String,
  credits: {
    type: Number,
    default: 0
  },
  activities: {
    week_1: {
      github_url: String,
      completed: Boolean
    },
    week_2: {
      github_url: String,
      completed: Boolean
    },
    week_3: {
      github_url: String,
      completed: Boolean
    },
    week_4: {
      github_url: String,
      completed: Boolean
    },
    week_5: {
      github_url: String,
      completed: Boolean
    },
    week_6: {
      github_url: String,
      completed: Boolean
    },
    week_7: {
      github_url: String,
      completed: Boolean
    },
    week_8: {
      github_url: String,
      completed: Boolean
    },
    week_9: {
      github_url: String,
      completed: Boolean
    },
    week_10: {
      github_url: String,
      completed: Boolean
    },
    week_11: {
      github_url: String,
      completed: Boolean
    },
    week_12: {
      github_url: String,
      completed: Boolean
    },
    week_13: {
      github_url: String,
      completed: Boolean
    },
    week_14: {
      github_url: String,
      completed: Boolean
    },
    week_15: {
      github_url: String,
      completed: Boolean
    },
    week_16: {
      github_url: String,
      completed: Boolean
    },
    week_17: {
      github_url: String,
      completed: Boolean
    },
    week_18: {
      github_url: String,
      completed: Boolean
    },
    week_19: {
      github_url: String,
      completed: Boolean
    },
    week_20: {
      github_url: String,
      completed: Boolean
    },
    week_21: {
      github_url: String,
      completed: Boolean
    },
    week_22: {
      github_url: String,
      completed: Boolean
    },
    week_23: {
      github_url: String,
      completed: Boolean
    },
    github_url: String
  },
  homework: {
    week_1: {
      github_url: String,
      completed: Boolean
    },
    week_2: {
      github_url: String,
      completed: Boolean
    },
    week_3: {
      github_url: String,
      completed: Boolean
    },
    week_4: {
      github_url: String,
      completed: Boolean
    },
    week_5: {
      github_url: String,
      completed: Boolean
    },
    week_6: {
      github_url: String,
      completed: Boolean
    },
    week_7: {
      github_url: String,
      completed: Boolean
    },
    week_8: {
      github_url: String,
      completed: Boolean
    },
    week_9: {
      github_url: String,
      completed: Boolean
    },
    week_10: {
      github_url: String,
      completed: Boolean
    },
    week_11: {
      github_url: String,
      completed: Boolean
    },
    week_12: {
      github_url: String,
      completed: Boolean
    },
    week_13: {
      github_url: String,
      completed: Boolean
    },
    week_14: {
      github_url: String,
      completed: Boolean
    },
    week_15: {
      github_url: String,
      completed: Boolean
    },
    week_16: {
      github_url: String,
      completed: Boolean
    },
    week_17: {
      github_url: String,
      completed: Boolean
    },
    week_18: {
      github_url: String,
      completed: Boolean
    },
    week_19: {
      github_url: String,
      completed: Boolean
    },
    week_20: {
      github_url: String,
      completed: Boolean
    },
    week_21: {
      github_url: String,
      completed: Boolean
    },
    week_22: {
      github_url: String,
      completed: Boolean
    },
    week_23: {
      github_url: String,
      completed: Boolean
    }
  },
  projects: {
      p1: {
        github_url: String,
        completed: Boolean
      },
      p2: {
        github_url: String,
        completed: Boolean
      },
      p3: {
        github_url: String,
        completed: Boolean
      }
  }
});

mongoose.model("users", userSchema);
import {
  REGEX_MIN,
  REGEX_MAX,
  REGEX_EMAIL,
  REGEX_NUMBER,
  REGEX_TEL
} from "../utils/regex.js"

export default {
  props: {
    value: {},
    label: {
      type: String,
      required: true
    },
    validate: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit("input", value)
      }
    },
    validator() {
      if (typeof this.validate === "string") {
        const validate = {}
        this.validate.split("|").forEach((value) => {
          if (["required", "email", "tel", "number"].includes(value)) {
            validate[value] = true
          }
          if (REGEX_MIN.test(value)) {
            validate.min = value.replace("min:", "")
          }
          if (REGEX_MAX.test(value)) {
            validate.max = value.replace("max:", "")
          }
        })
        return validate
      }
      return this.validate
    },
    rules() {
      const rules = []
      const validateTypes = ["required", "email", "tel", "number", "min", "max"]
      validateTypes.forEach((type) => {
        if (type in this.validator) {
          rules.push(this[type])
        }
      })
      if ("rules" in this.validator) {
        rules.push(...this.validator.rules)
      }
      return rules
    }
  },
  methods: {
    required(value) {
      return (
        !!value ||
        this.$t("validate.isRequired", {
          label: this.$t(this.label)
        })
      )
    },
    email(value) {
      return (
        !value ||
        (typeof value === "string" &&
          REGEX_EMAIL.test(String(value).toLowerCase()) &&
          value.length < 255) ||
        this.$t("validate.emailValid")
      )
    },
    tel(value) {
      return (
        !value ||
        REGEX_TEL.test(String(value).toLowerCase()) ||
        `${this.label} is the phone number.`
      )
    },
    number(value) {
      return (
        !value || REGEX_NUMBER.test(value) || `${this.label} is numbers only.`
      )
    },
    min(value) {
      const min = this.validator.min
      return (
        !value ||
        String(value).length >= Number(min) ||
        `${this.label} must be more than ${min} characters.`
      )
    },
    max(value) {
      const max = this.validator.max
      return (
        String(value).length <= Number(max) ||
        `${this.label} must be less than ${max} characters.`
      )
    }
  }
}

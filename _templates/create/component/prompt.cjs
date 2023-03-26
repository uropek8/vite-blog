const { kebab, pascal } = require('change-case');

const PREFIX_TYPES = {
    common: 'c-',
    unique: 'u-',
    pages: 'p-',
};

const INPUTS = {
    COMPONENT_TYPE: {
        type: 'select',
        name: 'componentType',
        message: 'What type of component do you want to create?',
        choices: Object.keys(PREFIX_TYPES),
    },
    COMPONENT_NAME: {
        type: 'input',
        name: 'componentName',
        message: 'Type component name (without prefix). Example: remote-select or RemoteSelect',
        validate(value, { componentType }) {
            const nameLength = value.length;
            const minLength = 3;
            const fileName = kebab(value);
            const forbiddenPrefixes = Object.values(PREFIX_TYPES);
            if (!nameLength) {
                return 'Components should have a name!!!';
            }
            if (nameLength < minLength) {
                return `Component name should contain at least ${minLength} symbols!!!`;
            }
            if (forbiddenPrefixes.includes(fileName.substring(0, 2))) {
                return 'No prefixes allowed!!! Prefix will be added automatically based on component type!!!';
            }
            if (!Object.keys(PREFIX_TYPES).includes(componentType)) {
                return `Invalid component type "${componentType}"`;
            }
            return true;
        },
    },
};

function generateComponentNames(componentType, componentName) {
    const prefix = PREFIX_TYPES[componentType];

    const kebabName = kebab(prefix + componentName);
    const pascalName = pascal(prefix + componentName);

    return {
        kebabName,
        pascalName
    };
}

module.exports = {
    prompt: async ({ inquirer }) => {
        const { componentType } = await inquirer.prompt([INPUTS.COMPONENT_TYPE]);
        const { componentName } = await inquirer.prompt([INPUTS.COMPONENT_NAME], { componentType });
        const { kebabName, pascalName } = generateComponentNames(componentType, componentName);
        const path = `src/components/${componentType}/${kebabName}/`;
        return {
            path,
            kebabName,
            pascalName,
            componentType,
        };
    },
};

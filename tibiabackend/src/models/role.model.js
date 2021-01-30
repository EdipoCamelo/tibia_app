import Sequelize from 'sequelize'

function Role(sequelize) {
    const Roledata = sequelize.define("roles", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        }
    });
}

// return Role;

export default Role
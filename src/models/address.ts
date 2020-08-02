import { Model, DataTypes, Association } from 'sequelize';
import sequelize from '../config/database';
import User from './user';

export default class Address extends Model {
  public id!: number;

  public user_id!: number;

  public street_name_address!: string;

  public detail_address!: string;

  public zip_code!: number;

  public building_name!: string;

  public static associations: {
    addresses: Association<User, Address>;
  };
}

Address.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    street_name_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detail_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    building_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'address',
    sequelize,
  },
);

Address.belongsTo(User, { foreignKey: 'user_id' });

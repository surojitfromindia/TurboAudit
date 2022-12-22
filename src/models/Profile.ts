import { InferAttributes, InferCreationAttributes, Model as SModel, CreationOptional, DataTypes, ForeignKey } from 'sequelize';
import { sq } from '../config/dbConnection';

class Profile extends SModel<InferAttributes<Profile>, InferCreationAttributes<Profile>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare sub_profile: ForeignKey<SubProfile['id']>;
}

class SubProfile extends SModel<InferAttributes<SubProfile>, InferCreationAttributes<SubProfile>> {
  declare id: CreationOptional<number>;
  declare currency: string;
}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(60),
    },
  },
  { sequelize: sq }
);

SubProfile.init(
  {
    currency: {
      type: DataTypes.ENUM('SAR', 'INR'),
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { sequelize: sq }
);

Profile.hasOne(SubProfile, {
  sourceKey: 'id',
  as: 'profile_sub_profile_fk',
});

SubProfile.belongsTo(Profile, {
  targetKey: 'id',
});
export { Profile };

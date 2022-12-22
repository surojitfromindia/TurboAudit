import { InferAttributes, InferCreationAttributes, Optional, Model as SModel, CreationOptional, DataType, DataTypes } from 'sequelize';
import {  Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import {sq} from "../config/dbConnection"
interface UserAttributes {
  id: number;
  name: string;
  email?: string;
  age: number;
  profile_id: number;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table
class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column
  name: string;

  @Column
  email?: string;

  @Column
  age: number;

  @Column
  profile: string;
}

export {User}


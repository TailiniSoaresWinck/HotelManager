import { IsEmail, IsNotEmpty, IsPositive, IsString, MaxLength, MinLength } from "class-validator/types/decorator/decorators";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(200)
    readonly name: string;

    @IsPositive()
    readonly user_level_id: number;

    @IsEmail()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(255)
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(255)
    readonly password: string;
}

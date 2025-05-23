import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateHotelDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(200)
    readonly name: string;

    
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(50)
    readonly cnpj: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(255)
    readonly address: string;
}

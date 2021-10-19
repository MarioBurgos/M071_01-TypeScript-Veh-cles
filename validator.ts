class Validator {

    public validatePlate(plate: string): boolean {
        var regex = /^[0-9]{4}[BCDFGHJKLMNPRSTVWXYZ]{3}/i;
        if (plate == "") {
            return false;
        }
        if (!regex.test(plate)) {
            return false;
        }
        return true;
    }
    public validateBrand(brand: string): boolean {
        if (brand === "") {
            return false;
        }
        return true;
    }
    public validateColor(color: string): boolean {
        if (color === "") {
            return false;
        }
        return true;
    }
}
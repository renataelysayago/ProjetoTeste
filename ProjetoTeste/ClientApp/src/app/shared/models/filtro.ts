export class FiltroBase {
    nome: string;
    nomePropriedade: string;
}

export class Filtro {
    listaFiltroCheckBox: FiltroCheckBox[] = [];
    listaFiltroData: FiltroData[] = [];
}

export class FiltroCheckBox extends FiltroBase {
    listaCheckBox: CheckBoxItem[];
}

export class FiltroData extends FiltroBase{
    dataInicio: Date;
    dataFim: Date;
}

export class CheckBoxItem {
    nome: string;
    checked: boolean;
}


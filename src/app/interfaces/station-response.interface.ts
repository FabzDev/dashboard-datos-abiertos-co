
  // Generated by https://quicktype.io
export interface StationResponse {
  tipo_agente:           string;
  nombre_comercial:      string;
  razon_social:          string;
  estado_agente:         string;
  departamento:          string;
  municipio:             string;
  codigo_municipio_dane: string;
  latitud:               string;
  longitud:              string;
}

export enum Departamento {
  Bolivar = "BOLIVAR",
}

export enum EstadoAgente {
  Activo = "ACTIVO",
  Inactivo = "INACTIVO",
}

export enum Municipio {
  Arjona = "ARJONA",
  CartagenaDeIndias = "CARTAGENA DE INDIAS",
  ElCarmenDeBolivar = "EL CARMEN DE BOLIVAR",
  Magangue = "MAGANGUE",
  Turbaco = "TURBACO",
}

export enum TipoAgente {
  ComercializadorDeEquipos = "COMERCIALIZADOR DE EQUIPOS",
  DistribuidorComercializadorDeGas = "DISTRIBUIDOR COMERCIALIZADOR DE GAS",
  EstacionDeServicioDeGncv = "ESTACION DE SERVICIO DE GNCV",
  ImportadorDeEquipos = "IMPORTADOR DE EQUIPOS",
  ImportadorDeVehiculos = "IMPORTADOR DE VEHICULOS",
  TallerDeConversion = "TALLER DE CONVERSION",
}

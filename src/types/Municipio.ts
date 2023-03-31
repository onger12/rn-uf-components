export interface Municipio {
  region:                       Region;
  c_digo_dane_del_departamento: string;
  departamento:                 string;
  c_digo_dane_del_municipio:    string;
  municipio:                    string;
}

export type Region = "Región Eje Cafetero - Antioquia" | "Región Centro Oriente" | "Región Caribe" | "Región Pacífico" | "Región Llano" | "Región Centro Sur";

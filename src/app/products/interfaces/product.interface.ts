// Generated by https://quicktype.io

export interface Product {
    id:                  number;
    name:                string;
    description:         string;
    unit_of_measurement: string;
    dimensions:          string;
    model:               string;
    amount_quoted:       string;
    united_price:        string;
    final_cost:          string;
    created_at:          string;
    updated_at:          string;
    sections:            Section[];
}

export interface Section {
    id:             number;
    name:           string;
    id_node_parent: number;
    created_at:     string;
    updated_at:     string;
    father:         Father;
    locations:      Location[];
}

export interface Father {
    id:             number;
    name:           string;
    id_node_parent: number | null;
    created_at:     string;
    updated_at:     string;
    father:         Father | null;
}

export interface Location {
    id:         number;
    name:       string;
    project_id: number;
    created_at: string;
    updated_at: string;
}


-- Crea la tabla de campañas
create table if not exists campaigns (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  amount_needed numeric not null,
  amount_raised numeric not null default 0
);

-- Inserta ejemplos iniciales
insert into campaigns (title, description, amount_needed)
values 
('Luz atrasada', 'Ayuda para pagar la factura de electricidad.', 100),
('Agua pendiente', 'Campaña para cubrir el servicio de agua.', 50),
('Medicamentos', 'Compra urgente de medicamentos.', 200);

package models

type Cart struct {
	ID            int                `json:"id" gorm:"primary_key:auto_increment"`
	QTY           int                `json:"qty"`
	SubTotal      int                `json:"subtotal"`
	ProductID     int                `json:"product_id" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	Product       ProductTransaction `json:"product"`
	ToppingID     []int              `json:"topping_id" gorm:"-"`
	Topping       []Topping          `json:"topping" gorm:"many2many:cart_toppings;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	TransactionID int                `json:"transaction_id"`
	// Transaction   TransactionResponse `json:"transaction"`
}

type CartResponse struct {
	ID        int                `json:"id"`
	UserID    int                `json:"user_id"`
	ProductID int                `json:"product_id"`
	ToppingID int                `json:"topping_id"`
	Product   ProductTransaction `json:"product"`
	Topping   []Topping          `json:"topping"`
}

func (CartResponse) TableName() string {
	return "carts"
}

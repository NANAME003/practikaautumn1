// Плашка с цифрой поверх картинки. Текст и число приходят через пропсы,
// поэтому компонент можно переиспользовать для любой статистики.
function ProductCounter({ label, value }) {
  return (
    <div className="absolute -bottom-4 left-5 rounded-xl
     border border-gray-200 bg-white px-4 py-3 shadow-sm">
      <p className="text-xs text-gray-500">{label}</p>
      <span className="mt-1 block text-xl font-medium text-gray-900">{value}</span>
    </div>
  );
}

export default ProductCounter;
